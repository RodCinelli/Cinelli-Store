$(document).ready(function () {
  // Animação de slide-in para os produtos
  $('.produto').each(function (i) {
    $(this).delay(100 * i).animate({ 'opacity': '1', 'marginTop': '0px' }, 600);
  });

  // Efeito de fade in e fade out apenas na imagem do produto
  $('.produto img').hover(function () {
    $(this).fadeTo(200, 0.9);
  }, function () {
    $(this).fadeTo(200, 1);
  });

  // Efeito de expansão ao passar o mouse sobre as imagens dos produtos
  $('.produto img').hover(function () {
    $(this).css('transform', 'scale(1.1)');
  }, function () {
    $(this).css('transform', 'scale(1)');
  });

  // Toggle do menu dropdown
  $('.hamburger-menu').click(function () {
    $('.dropdown-menu').fadeToggle(1000); // Duração de 1 segundo
  });

  // Efeito de expansão ao passar o mouse sobre o menu hambúrguer
  $('.hamburger-menu').hover(
    function () {
      $(this).css('transform', 'scale(1.1)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );

  // Função de clique para o botão 'Adicionar ao Carrinho'
  $('.adicionar-carrinho').click(function () {
    alert('Item adicionado ao carrinho!');
  });

  // Função para simular o efeito de digitação
  function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');

    var i = 0;
    var timer = setInterval(function () {
      if (i < text.length) {
        $(element).append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  // Aplica o efeito de digitação aos elementos desejados
  var h2Speed = 150; // Velocidade de digitação para os títulos h2
  $('.sobre-a-loja h2').each(function () {
    typeEffect(this, h2Speed);
  });
  $('.produtos h2').each(function () {
    typeEffect(this, h2Speed);
  });
});
