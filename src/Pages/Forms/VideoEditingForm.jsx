import { useDispatch, useSelector } from "react-redux";
import RequestLayout from "../../Layouts/RequestLayout"
import { FormQuestionCell } from "./Components";
import { createRequest } from "../../Logic/slices/api_slice/apiActions";

export default function VideoEditingForm() {
  const token = useSelector(state => state.auth.token);

  const videoQuestions = useSelector(state => state.api.videoQuestions);
  const dispatch = useDispatch();

  const handleSubmitVideoEditing = (event) => {
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
    formData['type'] = "video";
    console.log(token);
    dispatch(createRequest(token, formData));
  };

  return (
    <RequestLayout
      form_name={"Video Editing Form"}
      onSubmit={handleSubmitVideoEditing}
      imgUrl={"/img/video_editing.jpg"}
    >
      {
        videoQuestions.map((question, index) => {
          return <FormQuestionCell key={index} title={question.title} input_name={question._id} isRequired={false} placeholder={""} type={"text"} />
        })
      }


    </RequestLayout>
  );
}
