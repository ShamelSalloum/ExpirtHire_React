import {  FormQuestionCell } from "./Components";
import RequestLayout from "../../Layouts/RequestLayout";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../Logic/slices/api_slice/apiActions";
import { useNavigate } from "react-router-dom";

export default function LogoDesignForm() {
  const token = useSelector(state => state.auth.token);

  const logoQuestions = useSelector(state => state.api.logoQuestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitLogoDesign = (event) => {
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
    formData['type'] = "logo";
    console.log(token);
    dispatch(createRequest(token, formData ,navigate));
  };

  return (
    <RequestLayout
      form_name={"LogoDesign"}
      onSubmit={handleSubmitLogoDesign}
      imgUrl={"/img/logo_design.jpeg"}
    >
      {
        logoQuestions.map((question, index) => {
          return <FormQuestionCell key={index} title={question.title} input_name={question._id} isRequired={false} placeholder={""} type={"text"} />
        })
      }


    </RequestLayout>
  );
}
