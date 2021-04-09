import React from "react";
import { useForm } from "react-hook-form";

enum VideoPlatform {
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
  const onSubmit = (data: VideoInputData) => console.log(data);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 shadow-lg p-3 mt-3 ">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="form-group">
                  <label>Link: </label>
                  <input
                    className="form-control"
                    {...register("link", { required: true })}
                  />
                  {errors.link && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Video platform: </label>
                  <select
                    className="form-control"
                    {...register("platform", { required: true })}
                  >
                    <option>YouTube</option>
                    <option>Vimeo</option>
                  </select>
                  {errors.platform && (
                    <p className="text-danger">This field is required</p>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary mt-3">
                    Add to library
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVideoForm;
