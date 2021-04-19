import React from "react";
import { useForm } from "react-hook-form";
import {Form, FormGroup,Label,Button} from "reactstrap";

export enum VideoPlatform {
  youtube,
  vimeo,
}
type VideoInputData = {
  link: string;
  platform: VideoPlatform;
};

const AddVideoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoInputData>();

  const onSubmit = (data: VideoInputData) => {console.log(data)};

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 shadow-lg p-3 mt-3 ">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="formContainer__width text-center">
              <h2>Input video link like:</h2>
              <ul>
                <li>https://www.youtube.com/watch?v=4JOAqRS_lms</li>
                <li>https://youtu.be/vJ3a_AuEW18</li>
                <li>https://vimeo.com/181696349</li>
              </ul>
              <p>or video id like: vJ3a_AuEW18</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <FormGroup>
                  <Label>Link: </Label>
                  <input
                    className="form-control"
                    {...register("link", { required: true })}
                  />
                  {errors.link && (
                    <p className="text-danger">This field is required</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Video platform: </Label>
                  <select
                    className="form-control"
                    {...register("platform", { required: true })}
                  >
                    <option disabled selected value="">--select an option --</option>
                    <option value="Youtube">YouTube</option>
                    <option value="Vimeo">Vimeo</option>
                  </select>
                  {errors.platform && (
                    <p className="text-danger">This field is required</p>
                  )}
                </FormGroup>
                <div className="d-flex justify-content-end mt-3">
                  <Button type="submit" color="primary">
                    Add to library
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddVideoForm;
