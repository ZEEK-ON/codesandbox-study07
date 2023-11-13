import { useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const onClickBack = () => history.back();
  return (
    <div>
      <h1>PageDetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
