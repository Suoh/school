webpackJsonp([15],{kkp4:function(e,r,n){var o;o=function(){"use strict";var e,r={name:"pt_PT",messages:{after:function(e,r){return"O campo "+e+" deve estar depois do campo "+r[0]+"."},alpha_dash:function(e){return"O campo "+e+" deve conter letras, números e traços."},alpha_num:function(e){return"O campo "+e+" deve conter somente letras e números."},alpha_spaces:function(e){return"O "+e+" só pode conter caracteres alfabéticos e espaços."},alpha:function(e){return"O campo "+e+" deve conter somente letras."},before:function(e,r){return"O campo "+e+" deve estar antes do campo "+r[0]+"."},between:function(e,r){return"O campo "+e+" deve estar entre "+r[0]+" e "+r[1]+"."},confirmed:function(e,r){return"Os campos "+e+" e "+r[0]+" devem ser iguais."},credit_card:function(e){return"O campo "+e+" é inválido."},date_between:function(e,r){return"O campo "+e+" deve estar entre "+r[0]+" e "+r[1]+"."},date_format:function(e,r){return"O campo "+e+" deve estar no formato "+r[0]+"."},decimal:function(e,r){void 0===r&&(r=[]);var n=r[0];return void 0===n&&(n="*"),"O campo "+e+" deve ser numérico e deve conter "+("*"===n?"":n)+" casas decimais."},digits:function(e,r){return"O campo "+e+" deve ser numérico e ter "+r[0]+" dígitos."},dimensions:function(e,r){return"O campo "+e+" deve ter "+r[0]+" pixels de largura por "+r[1]+" pixels de altura."},email:function(e){return"O campo "+e+" deve ser um email válido."},ext:function(e){return"O campo "+e+" deve ser um ficheiro válido."},image:function(e){return"O campo "+e+" deve ser uma imagem."},included:function(e){return"O campo "+e+" deve ter um valor válido."},ip:function(e){return"O campo "+e+" deve ser um endereço IP válido."},max:function(e,r){return"O campo "+e+" não deve ter mais que "+r[0]+" caracteres."},max_value:function(e,r){return"O campo "+e+" precisa ser "+r[0]+" ou menor."},mimes:function(e){return"O campo "+e+" deve ser um tipo de ficheiro válido."},min:function(e,r){return"O campo "+e+" deve conter pelo menos "+r[0]+" caracteres."},min_value:function(e,r){return"O campo "+e+" precisa ser "+r[0]+" ou maior."},excluded:function(e){return"O campo "+e+" deve ser um valor válido."},numeric:function(e){return"O campo "+e+" deve conter apenas números"},regex:function(e){return"O campo "+e+" possui um formato inválido."},required:function(e){return"O campo "+e+" é obrigatório."},size:function(e,r){var n,o,t;return"O campo "+e+" deve ser menor que "+(n=r[0],o=1024,t=0==(n=Number(n)*o)?0:Math.floor(Math.log(n)/Math.log(o)),1*(n/Math.pow(o,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t])+"."},url:function(e){return"O campo "+e+" não é um URL válido."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[r.name]=r,e)),r},e.exports=o()}});