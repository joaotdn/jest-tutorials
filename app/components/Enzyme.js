// Enzyme
// utilitario de teste desenvolvido pela AirBnB 
// para facilitar asserts, mnipular e percorrer 
// a saída de um componente
import Enzyme from 'enzyme'

// migra a api de enzyme para conhecer a 
// versao 16 do react
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

export default Enzyme