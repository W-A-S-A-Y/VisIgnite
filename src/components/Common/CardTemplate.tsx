const CardTemplate = ({
    title,
    services,
    width = "400px",
    center,
    mb = "50px",
  }: {
    title: string;
    services: string[];
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
        className={`${center ? "mx-auto text-center" : ""}`}
        style={{
          maxWidth: width,
          marginBottom: mb,
          backgroundColor: "#0038AD", // Background color
          padding: "20px",
          color: "white", // Text color for contrast
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Drop shadow
        }}
        >
          <h3 className="mb-4 text-xl font-bold !leading-tight text-white">
            {title}
          </h3>
          <ul className="list-inside">
            {services.map((service, index) => (
              <li key={index} className="mb-2 text-base leading-relaxed">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default CardTemplate;
  