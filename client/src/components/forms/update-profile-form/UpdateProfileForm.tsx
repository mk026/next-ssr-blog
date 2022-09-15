import { FC } from "react";

const UpdateProfileForm: FC = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="text" />
      </label>
    </form>
  );
};

export default UpdateProfileForm;
