import React from 'react'
import { render } from 'react-dom'
import Clock from 'Clock'
import Enzyme from '../../components/Enzyme'

const { shallow } = Enzyme

describe('Clock', () => {
    it('renders without crashing', () => {
        // monta o componente e verifica se 
        // o mesmo não executa uma exceção
        const div = document.createElement('div')
        render(<Clock />, div)
    })

    describe('render', () => {
        // shallow = isola o componente testado do componentes filhos
        // mount = renderiza com maior profundidade os componentes
        const clock = shallow(<Clock timeInSeconds={63} />)
        const time = <span className="clock-text">01:03</span>

        expect(clock.contains(time)).toEqual(true)
    })
})
