import RequestLayout from "../../Layouts/RequestLayout";
import { FormQuestionCell } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../Logic/slices/api_slice/apiActions";

export default function BuildingDesignForm() {
  const token = useSelector(state => state.auth.token);

  const buildingQuestions = useSelector(state => state.api.buildingQuestions);
  const dispatch = useDispatch();
  const handleSubmitBuildingDesign = (event) => {
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
    dispatch(createRequest(token, formData));
  };
  
  return (
    <RequestLayout
      form_name={"Building Design Form"}
      onSubmit={handleSubmitBuildingDesign}
      imgUrl={"/img/building.jpg"}
    >
      {
        buildingQuestions.map((question, index) => {
          return <FormQuestionCell key={index} title={question.title} input_name={question._id} isRequired={false} placeholder={""} type={"text"} />
        })
      }


    </RequestLayout>
  );
}
