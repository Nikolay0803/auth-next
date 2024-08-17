type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = (props: Props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default DashBoardLayout;
