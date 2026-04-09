import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <div className="relative w-full" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;