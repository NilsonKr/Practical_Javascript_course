import { calcArea, calcPerimeter} from './square'
import { calcAreaT, calcPerimeterT} from './triangle'
import { calcAreaCircle, calcCircunference} from './circle'



console.log('Area Square', calcArea(5))
console.log('Perimeter Square', calcPerimeter(5))



console.log('Area Triangle', calcAreaT(5,4.5))
console.log('Perimeter Triangle', calcPerimeterT(3,3,5))



console.log('Area Circle', calcAreaCircle(3))
console.log('Perimeter Circle', calcCircunference(3))
