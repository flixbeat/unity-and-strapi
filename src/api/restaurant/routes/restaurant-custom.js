module.exports = {
  routes: [
    {
      method: "GET",
      path: "/restaurant/GetData",
      handler: "restaurant.GetData",
    },

    {
      method: "GET",
      path: "/restaurant/GetFirstRecord",
      handler: "restaurant.GetFirstRecord"
    },

    {
      method: "POST",
      path: "/restaurant/CreateRecord",
      handler: "restaurant.CreateRecord"
    },

    {
      method: "POST",
      path: "/restaurant/UpdateRecord",
      handler: "restaurant.UpdateRecord"
    },

    {
      method: "POST",
      path: "/restaurant/DeleteRecord",
      handler: "restaurant.DeleteRecord"
    },

    {
      method: "GET",
      path: "/restaurant/GetAllRecords",
      handler: "restaurant.GetAllRecords"
    },

    ],
  };
  