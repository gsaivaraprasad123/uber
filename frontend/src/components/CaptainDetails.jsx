import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            src="https://imgs.search.brave.com/B_99flCHoHQs-0G0KwMGy4q-vA_I1Jps4Pi6ZoeWGxs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZkLzlh/LzMyLzZkOWEzMjU3/NWY1YzM5YTViNzll/MmQxZDYyY2NlZjY1/LmpwZw"
            alt="profil pic"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h4 className="text-lg font-medium">Test Driver name</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹245</h4>
          <p className="text-sm text-gray-600 ">Earned</p>
        </div>
      </div>
      <div className="flex justify-center items-start gap-5 p-3 bg-gray-100 rounded-xl mt-12">
        <div className="text-center ">
          <i className="ri-time-line text-3xl mb-2 font-medium"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="ri-speed-up-fill text-3xl mb-2 font-medium"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="ri-booklet-line text-3xl mb-2 font-medium"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
