import { FC } from "react";

const AddPostForm: FC = () => {
  return (
    <form>
      <label>
        Title
        <input type="text" />
      </label>
      <label>
        Content
        <input type="text" />
      </label>
    </form>
  );
};

export default AddPostForm;
