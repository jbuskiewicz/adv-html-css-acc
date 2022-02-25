// File, FileList, FileReader, Blob
const formData = new FormData();

if (window.File && window.FileList && window.FileReader && window.Blob) {
  $("#fileInput").change((e) => {
    const files = e.target.files;
    // https://codepen.io/mobifreaks/pen/AMjEKw
    for (const file of files) {
      formData.append("files[]", file, file.name);
      if (file.type.match("image*")) {
        let reader = new FileReader();
        reader.onload = ((readedFile) => {
          return readedFile;
        })(file);
      }
    }
    console.log(formData.getAll("files[]"));
  });
} else {
  throw new Error("File not supported");
}

// new xhr = new XMLHttpRequest;
// xhr.open('POST', url, true);

// xhr.send(formData);

$("#dropZone").on("dragover", (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log("dragujemy");
});

$("#dropZone").on("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log(event.originalEvent.dataTransfer.files);
});

$("#dropZone").on("click", () => {
  $("#fileInput").click();
});

// document.getElementById("dropZone").addEventListener("drop", (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   console.log(event);
// });

// document.getElementById("dropZone").addEventListener("drop", (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   console.log(event);
// });

$("#form").on("submit", (e) => {
  e.preventDefault();
  const formChildren = $("#form").children();
  //   console.log(Array.isArray(formChildren));
  const inputs = Array.from(formChildren)
    .filter((el, id) => {
      // console.log(el);
      return el.tagName === "INPUT";
    })
    .map((input) => {
      return {
        name: $(input).attr("name"),
        value: $(input).val(),
        isValid: validateInput($(input).attr("type")),
      };
    });
  console.log(inputs);
  //   console.log(formChildren);
});

const validateInput = (type, value, callback) => {
  if (type === "email") {
    return value.match(/[a-z]@/);
  }
};

const users = [
  { name: "Kuba", city: "Poznan" },
  { name: "Jasiu", city: "Poznan" },
  { name: "Stasiu", city: "Poznan" },
];

// todo: do srody materialy
// history api - kilka przykladow
// formularze - zastosowanie jquery plugin
