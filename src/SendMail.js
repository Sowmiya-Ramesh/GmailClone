import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
  };
  const history = useHistory();
  return (
    <div className="sendmail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("tow", { required: true })}
        />
        {/* <p>{errors.to && <p className="sendMail_error">To is required !</p>}</p> */}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <input
          placeholder="Message.."
          type="text"
          className="sendMail_mesasge"
          {...register("message", { required: true })}
        />
        {/* ref={register({ required: true })} */}
        <div className="sendmail_options">
          <Button
            className="sendmail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SendMail;
