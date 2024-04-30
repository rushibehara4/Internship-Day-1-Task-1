let currentPage = 1;
let entriesPerPage = 10;
let totalPages = 1;

let userDetails = [
  {
    seq: 1,
    firstName: "Tiger",
    lastName: "Nixon",
    position: "System Architect",
    age: "61",
    startDate: "2011-04-25",
    salary: "$320,800",
    extn: 5421,
    email: "t.nixon@datatables.net",
  },
  {
    seq: 2,
    firstName: "Garrett",
    lastName: "Winters",
    position: "Accountant",
    age: "63",
    startDate: "2011-07-25",
    salary: "$170,750",
    extn: 8422,
    email: "g.winters@datatables.net",
  },
  {
    seq: 3,
    firstName: "Ashton",
    lastName: "Cox",
    position: "Junior Technical Author",
    age: "66",
    startDate: "2009-01-12",
    salary: "$86,000",
    extn: 1562,
    email: "a.cox@datatables.net",
  },
  {
    seq: 4,
    firstName: "Cedric",
    lastName: "Kelly",
    position: "Senior Javascript Developer",
    age: "22",
    startDate: "2012-03-29",
    salary: "$433,060",
    extn: 6224,
    email: "c.kelly@datatables.net",
  },
  {
    seq: 5,
    firstName: "Airi",
    lastName: "Satou",
    position: "Accountant",
    age: "33",
    startDate: "2008-11-28",
    salary: "$162,700",
    extn: 5407,
    email: "a.satou@datatables.net",
  },
  {
    seq: 6,
    firstName: "Brielle",
    lastName: "Williamson",
    position: "Integration Specialist",
    age: "61",
    startDate: "2012-12-02",
    salary: "$372,000",
    extn: 4804,
    email: "b.williamson@datatables.net",
  },
  {
    seq: 7,
    firstName: "Herrod",
    lastName: "Chandler",
    position: "Sales Assistant",
    age: "59",
    startDate: "2012-08-06",
    salary: "$137,500",
    extn: 9608,
    email: "h.chandler@datatables.net",
  },
  {
    seq: 8,
    firstName: "Rhona",
    lastName: "Davidson",
    position: "Integration Specialist",
    age: "55",
    startDate: "2010-10-14",
    salary: "$327,900",
    extn: 6200,
    email: "r.davidson@datatables.net",
  },
  {
    seq: 9,
    firstName: "Colleen",
    lastName: "Hurst",
    position: "Javascript Developer",
    age: "39",
    startDate: "2009-09-15",
    salary: "$205,500",
    extn: 2360,
    email: "c.hurst@datatables.net",
  },
  {
    seq: 10,
    firstName: "Sonya",
    lastName: "Frost",
    position: "Software Engineer",
    age: "23",
    startDate: "2008-12-13",
    salary: "$103,600",
    extn: 1667,
    email: "s.frost@datatables.net",
  },
  {
    seq: 11,
    firstName: "Jena",
    lastName: "Gaines",
    position: "Office Manager",
    age: "30",
    startDate: "2008-12-19",
    salary: "$90,560",
    extn: 3814,
    email: "j.gaines@datatables.net",
  },
  {
    seq: 12,
    firstName: "Quinn",
    lastName: "Flynn",
    position: "Support Lead",
    age: "22",
    startDate: "2013-03-03",
    salary: "$342,000",
    extn: 9497,
    email: "q.flynn@datatables.net",
  },
  {
    seq: 13,
    firstName: "Charde",
    lastName: "Marshall",
    position: "Regional Director",
    age: "36",
    startDate: "2008-10-16",
    salary: "$470,600",
    extn: 6741,
    email: "c.marshall@datatables.net",
  },
  {
    seq: 14,
    firstName: "Haley",
    lastName: "Kennedy",
    position: "Senior Marketing Designer",
    age: "43",
    startDate: "2012-12-18",
    salary: "$313,500",
    extn: 3597,
    email: "h.kennedy@datatables.net",
  },
  {
    seq: 15,
    firstName: "Tatyana",
    lastName: "Fitzpatrick",
    position: "Regional Director",
    age: "19",
    startDate: "2010-03-17",
    salary: "$385,750",
    extn: 1965,
    email: "t.fitzpatrick@datatables.net",
  },
  {
    seq: 16,
    firstName: "Michael",
    lastName: "Silva",
    position: "Marketing Designer",
    age: "66",
    startDate: "2012-11-27",
    salary: "$198,500",
    extn: 1581,
    email: "m.silva@datatables.net",
  },
  {
    seq: 17,
    firstName: "Paul",
    lastName: "Byrd",
    position: "Chief Financial Officer (CFO)",
    age: "64",
    startDate: "2010-06-09",
    salary: "$725,000",
    extn: 3059,
    email: "p.byrd@datatables.net",
  },
  {
    seq: 18,
    firstName: "Gloria",
    lastName: "Little",
    position: "Systems Administrator",
    age: "59",
    startDate: "2009-04-10",
    salary: "$237,500",
    extn: 1721,
    email: "g.little@datatables.net",
  },
  {
    seq: 19,
    firstName: "Bradley",
    lastName: "Greer",
    position: "Software Engineer",
    age: "41",
    startDate: "2012-10-13",
    salary: "$132,000",
    extn: 2558,
    email: "b.greer@datatables.net",
  },
  {
    seq: 20,
    firstName: "Dai",
    lastName: "Rios",
    position: "Personnel Lead",
    age: "35",
    startDate: "2012-09-26",
    salary: "$217,500",
    extn: 2290,
    email: "d.rios@datatables.net",
  },
  {
    seq: 21,
    firstName: "Jenette",
    lastName: "Caldwell",
    position: "Development Lead",
    age: "30",
    startDate: "2011-09-03",
    salary: "$345,000",
    extn: 1937,
    email: "j.caldwell@datatables.net",
  },
  {
    seq: 22,
    firstName: "Yuri",
    lastName: "Berry",
    position: "Chief Marketing Officer (CMO)",
    age: "40",
    startDate: "2009-06-25",
    salary: "$675,000",
    extn: 6154,
    email: "y.berry@datatables.net",
  },
  {
    seq: 23,
    firstName: "Caesar",
    lastName: "Vance",
    position: "Pre-Sales Support",
    age: "21",
    startDate: "2011-12-12",
    salary: "$106,450",
    extn: 8330,
    email: "c.vance@datatables.net",
  },
  {
    seq: 24,
    firstName: "Doris",
    lastName: "Wilder",
    position: "Sales Assistant",
    age: "23",
    startDate: "2010-09-20",
    salary: "$85,600",
    extn: 3023,
    email: "d.wilder@datatables.net",
  },
  {
    seq: 25,
    firstName: "Angelica",
    lastName: "Ramos",
    position: "Chief Executive Officer (CEO)",
    age: "47",
    startDate: "2009-10-09",
    salary: "$1,200,000",
    extn: 5797,
    email: "a.ramos@datatables.net",
  },
  {
    seq: 26,
    firstName: "Gavin",
    lastName: "Joyce",
    position: "Developer",
    age: "42",
    startDate: "2010-12-22",
    salary: "$92,575",
    extn: 8822,
    email: "g.joyce@datatables.net",
  },
  {
    seq: 27,
    firstName: "Jennifer",
    lastName: "Chang",
    position: "Regional Director",
    age: "28",
    startDate: "2010-11-14",
    salary: "$357,650",
    extn: 9239,
    email: "j.chang@datatables.net",
  },
  {
    seq: 28,
    firstName: "Brenden",
    lastName: "Wagner",
    position: "Software Engineer",
    age: "28",
    startDate: "2011-06-07",
    salary: "$206,850",
    extn: 1314,
    email: "b.wagner@datatables.net",
  },
  {
    seq: 29,
    firstName: "Fiona",
    lastName: "Green",
    position: "Chief Operating Officer (COO)",
    age: "48",
    startDate: "2010-03-11",
    salary: "$850,000",
    extn: 2947,
    email: "f.green@datatables.net",
  },
  {
    seq: 30,
    firstName: "Shou",
    lastName: "Itou",
    position: "Regional Marketing",
    age: "20",
    startDate: "2011-08-14",
    salary: "$163,000",
    extn: 8899,
    email: "s.itou@datatables.net",
  },
];

let filteredUserList = [];

let userListCount = document.getElementById("numberOfUserList");

function toggleArrow(button) {
  button.classList.toggle("rotate");
  button.blur();
}

function onSearchName(event) {
  let searchName = event.target.value;

  filteredUserList = userDetails.filter((user) => {
    return user.firstName.toLowerCase().includes(searchName.toLowerCase());
  });

  displayUsers();
}

let searchByName = document.getElementById("nameSearch");

searchByName.addEventListener("keyup", function (event) {
  onSearchName(event);
});

function displayUser(user) {
  let tableBody = document.getElementById("tableBody");

  let row = document.createElement("tr");

  row.innerHTML = `
    <td class="arrow-cell"><button class="arrow-button" onclick="toggleArrow(this)"><i class="bi bi-caret-right-fill me-3"></i></button>${user.seq}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.position}</td>
    <td>${user.age}</td>
    <td>${user.startDate}</td>
    <td>${user.salary}</td>
    `;

  tableBody.appendChild(row);
}

function displayUsers() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  let startIndex = (currentPage - 1) * entriesPerPage;
  let endIndex = Math.min(startIndex + entriesPerPage, filteredUserList.length);

  let slicedUserList = filteredUserList.slice(startIndex, endIndex);

  slicedUserList.forEach((user) => {
    displayUser(user);
  });

  let rangeText = document.getElementById("rangeText");
  rangeText.textContent = `Showing ${startIndex + 1} to ${endIndex} of ${
    filteredUserList.length
  } entries`;

  updatePagination();
}

userListCount.addEventListener("change", function (event) {
  entriesPerPage = parseInt(event.target.value);
  currentPage = 1;
  displayUsers();
});

function updatePagination() {
  totalPages = Math.ceil(filteredUserList.length / entriesPerPage);

  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  let prevPage = document.createElement("li");
  prevPage.classList.add("page-item");
  if (currentPage === 1) {
    prevPage.classList.add("disabled");
  }
  prevPage.innerHTML = `
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    `;
  prevPage.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      displayUsers();
    }
  });
  pagination.appendChild(prevPage);

  for (let i = 1; i <= totalPages; i++) {
    let page = document.createElement("li");
    page.classList.add("page-item");
    if (i === currentPage) {
      page.classList.add("active");
    }
    page.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    page.addEventListener("click", function () {
      currentPage = i;
      displayUsers();
    });
    pagination.appendChild(page);
  }

  let nextPage = document.createElement("li");
  nextPage.classList.add("page-item");
  if (currentPage === totalPages) {
    nextPage.classList.add("disabled");
  }
  nextPage.innerHTML = `
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    `;
  nextPage.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayUsers();
    }
  });
  pagination.appendChild(nextPage);
}

window.onload = function () {
  filteredUserList = userDetails;
  displayUsers();
};
