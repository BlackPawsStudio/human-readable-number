module.exports = function toReadable (number) {
    let result = '';
    let arr = number.toString().split('').reverse();
    if (arr == '0'){
     return 'zero'; 
    }
    else{

        if (arr[1] == '1'){
            let cond = arr.reverse().join('')
            if (arr.length == 3){cond = cond.slice(1)}
            switch (cond) {
            case '10':
                result = 'ten';
                break;
            case '11':
                result = 'eleven';
                break;
            case '12':
                result = 'twelve';
                break;
            case '13':
                result = 'thirteen';
                break;
            case '14':
                result = 'fourteen';
                break;
            case '15':
                result = 'fifteen';
                break;
            case '16':
                result = 'sixteen';
                break;
            case '17':
                result = 'seventeen';
                break;
            case '18':
                result = 'eighteen';
                break;
            case '19':
                result = 'nineteen';
                break;
              }
              arr.reverse()
        }
        else{
            switch (arr[0]) {
                case '1':
                    result = result + 'one';
                    break;
                case '2':
                    result = result + 'two';
                    break;
                case '3':
                    result = result + 'three';
                    break;
                case '4':
                    result = result + 'four';
                    break;
                case '5':
                    result = result + 'five';
                    break;
                case '6':
                    result = result + 'six';
                    break;
                case '7':
                    result = result + 'seven';
                    break;
                case '8':
                    result = result + 'eight';
                    break;
                case '9':
                    result = result + 'nine';
                    break;
            }  
        }
        switch (arr[1]) {
            case '2':
                result = result + ' twenty';
                break;
            case '3':
                result = result + ' thirty';
                break;
            case '4':
                result = result + ' forty';
                break;
            case '5':
                result = result + ' fifty';
                break;
            case '6':
                result = result + ' sixty';
                break;
            case '7':
                result = result + ' seventy';
                break;
            case '8':
                result = result + ' eighty';
                break;
            case '9':
                result = result + ' ninety';
                break;
  }
  switch (arr[2]) {
    case '1':
  result = result + ' hundred one';
  break;
  case '2':
  result = result + ' hundred two';
  break;
  case '3':
  result = result + ' hundred three';
  break;
  case '4':
  result = result + ' hundred four';
  break;
  case '5':
  result = result + ' hundred five';
  break;
  case '6':
  result = result + ' hundred six';
  break;
  case '7':
  result = result + ' hundred seven';
  break;
  case '8':
  result = result + ' hundred eight';
  break;
  case '9':
  result = result + ' hundred nine';
  break;   }
  
  
  if(arr[1]=='1'){
    if (result[result.length - 1] == ' '){
        result = result.substring(0, result.length - 1)
      }
      let ara = result.split(' ');
    ara.reverse();
    result = ara.join(' ');
    return result;
  }
  else{
    if (result[0] == ' '){
        result = result.substring(1, result.length)
      }
    let ara = result.split(' ');
    ara.reverse();
    result = ara.join(' ');
    return result;}
  }}