const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");
const bucketUrl = document.getElementById("bucketUrl")

imageForm.addEventListener("submit", async event => {
    event.preventDefault()
    const file = imageInput.files[0]
    const url = bucketUrl.value;
    // get secure url from our server

    console.log(url)

    // post the image direclty to the s3 bucket
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: file
    })

    const imageUrl = url.split('?')[0]
    console.log(imageUrl)

    // post requst to my server to store any extra data


    const img = document.createElement("img")
    img.src = imageUrl
    document.body.appendChild(img)
})