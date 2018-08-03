$(document).ready(() => {
    const dibujarGifs = (data) => {
        let gif = "";
        let url = "";
        data.forEach((element) =>{
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $("#elementos").append(armarTemplate(gif, url));
        });
    }

    const armarTemplate = (gif,url) => {
        console.log('hola img');
        let t = `<div class='elemento'><img src='${gif}'/><a href='${url}'><p>Ver mas</p></a></div>`;
        console.log(t);
        return t;
    }

    const ajaxGif = (gif) => {
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/search',
            type: 'GET',
            datatype: 'json',
            data: {
                q: gif,
                api_key: 'hvI9VlayLdibEu7J75wDGmC16Z896Ttk'
            }
        })
        .done((response) => {
            console.log(response);
            dibujarGifs(response.data);
        })
        .fail(() => {
            console.log('error');
        });
    }

    $("#buscar-gif").click((event) => {
        console.log("entro");
        $("#elementos").empty();
        let gif = $("#gif-text").val();
        ajaxGif(gif);
    })
})