const drivers = data.MRData.DriverTable.Drivers;

const blacklist = [
  "Jak Crawford"
];

const filteredDrivers = drivers.filter(d =>
  !blacklist.includes(`${d.Jak} ${d.Crawford}`)
);

filteredDrivers.forEach(d => {
   {
          "driverId": "jak_crawford",
          "givenName": "Jak",
          "familyName": "Crawford"
        }
});