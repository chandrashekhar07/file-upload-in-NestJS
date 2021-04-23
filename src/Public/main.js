


async function uploadFile(fileform) {
    const formData = new FormData(fileform);
    const value = await fetch("http://127.0.0.1:8000/filehandler", {
        body: formData,
        method: "POST",
        dataType: "JsonP"
    })
        .then(response => {
            if (response.status === (201 || 202)) {
                console.log(response);
                return response.json();

            }
        })
        //.then(data => console.log(data))
        .catch(err => alert("there is " + err));

        
    try{
        console.log(value);
    
    if (value['sucess'] === "truee") {

        alert("sucessfully uploaded");

    }
    else {
        alert("failed to upload");
    }
}
catch(err)
{
    alert("failed to upload"+err);
}

}