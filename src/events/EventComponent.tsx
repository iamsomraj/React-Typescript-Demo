const EventComponent: React.FC = () => {
  const inputOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log(event.target.value);
  };

  const divOnDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.target);
  };

  return (
    <div>
      Event Component
      <div>
        <input type="text" onChange={inputOnChangeHandler} />
      </div>
      <div draggable onDrag={divOnDragHandler}>
        Drag Me Please
      </div>
    </div>
  );
};

export default EventComponent;
