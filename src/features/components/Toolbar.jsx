import styles from "./toolbar.module.css";

export default function Toolbar() {
  let options = [
    {
      btnTitle: "Play Movie",
      onClick: () => alert("Playing!"),
    },
    {
      btnTitle: "Upload Image",
      onClick: () => alert("Uploading!"),
    },
  ];

  return <ToolbarWrapper options={options} />;
}

function ToolbarWrapper({ options }) {
  return (
    <div className={styles["btns-wrapper"]}>
      {options.map((item, index) => {
        return (
          <Button key={index} onClick={item.onClick} title={item.btnTitle}>
            {item.btnTitle}
          </Button>
        );
      })}
    </div>
  );
}

function Button({ onClick, title, children }) {
  return (
    <button onClick={onClick} title={title}>
      {children}
    </button>
  );
}
