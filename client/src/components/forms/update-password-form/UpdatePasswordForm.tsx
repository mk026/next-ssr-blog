import { FC } from "react";

const UpdatePasswordForm: FC = () => {
  return (
    <form>
      <label>
        Old password
        <input type="password" />
      </label>
      <label>
        New password
        <input type="password" />
      </label>
      <label>
        Confirm password
        <input type="password" />
      </label>
    </form>
  );
};

export default UpdatePasswordForm;
