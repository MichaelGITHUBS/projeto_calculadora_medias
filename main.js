$(document).ready(function() {
       $('header button').click(function() {
           $('form').slideDown();
       });
   
       $('#cancelar').click(function() {
           $('form').slideUp();
       });
   
       $('form').on('submit', function(e) {
           e.preventDefault();
   
           const enderecoDaNovaImagem = $('#urlImagem').val(); 
   
           const novoItem = $('<li style="display: none"></li>');
   
          
           const novaImagem = $('<img />', { src: enderecoDaNovaImagem });
           novaImagem.appendTo(novoItem);  
   
          
           const link = $('<div class="overlay-imagem-link"></div>')
               .append(
                   $('<a></a>', {
                       href: enderecoDaNovaImagem,
                       target: '_blank',
                       title: 'Ver imagem em tamanho real',
                       text: 'Ver imagem em tamanho real'
                   })
               );
           link.appendTo(novoItem); 
   
           $('ul').append(novoItem);
           $(novoItem).fadeIn();
           $("#endereco-imagem-nova").val('')
   
          
           $('#urlImagem').val('');
           $('form').slideUp();  
       });
   });