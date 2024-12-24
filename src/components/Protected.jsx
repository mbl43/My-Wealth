import Navbar from "./Navbar/Navbar";
const Protected = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Navbar user={user} />
      <div className="max-w-screen-xl mx-auto">
        <div className="p-4 flex justify-center items-center flex-wrap flex-col text-center">
          <div className="rounded-full">
            <img
              src="https://placehold.co/120"
              className="rounded-full"
              alt="profile image"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mt-7">
            Your Email: {user && user.email}
          </h3>
          <div>
            <h3 className="text-xl Font-semibold text-gray-700 mt-7">
              Your Name: {user && user.displayName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protected;
