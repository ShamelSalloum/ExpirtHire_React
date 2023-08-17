import { FormQuestionCell } from "./Components";
import RequestLayout from "../../Layouts/RequestLayout";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../Logic/slices/api_slice/apiActions";
import { useNavigate } from "react-router-dom";

export default function WebDesignForm() {
  const token = useSelector(state => state.auth.token);
  const webQuestions = useSelector(state => state.api.webQuestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitWebRequest = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {};
    const answers = [];
    for (const [key, value] of data.entries()) {
      if (key === 'budget' || key === 'city' || key === 'country' || key === 'email' || key === 'first_name' || key === 'last_name' || key === 'phone' || key === 'phoneCode') {
        formData[key] = value;
      } else {
        answers.push({ question_id: key, answer: value });
      }
    }
    formData['answers'] = answers;
    formData['type'] = "web";
    console.log(token);
    dispatch(createRequest(token, formData,navigate));
  };

  return (
    <RequestLayout
      form_name={"Web Request"}
      onSubmit={handleSubmitWebRequest}
      imgUrl={"/img/web1.jpg"}
      isRequired={false}
    >
      {
        webQuestions.map((question, index) => {
          return <FormQuestionCell key={index} title={question.title} input_name={question._id} isRequired={false} placeholder={""} type={"text"} />
        })
      }
    </RequestLayout>
  );
}
