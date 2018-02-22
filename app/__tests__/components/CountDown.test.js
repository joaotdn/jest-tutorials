import React from 'react'
import { render } from 'react-dom'
import CountDown from 'Countdown'
import TestUtils from 'react-dom/test-utils';
import Enzyme from '../../components/Enzyme'

// verificar forma de colocar dentro do 
// mesmo diretorio e ser ignorado pelo teste
const { shallow } = Enzyme

describe('CountDown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        render(<CountDown />, div)
    })

    describe('handleSetCountdownTime', () => {

        it('should set countdown time and start countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<CountDown />)
            countdown.handleSetCountdownTime(10)

            expect(countdown.state.count).toBe(10)
            expect(countdown.state.countdownStatus).toBe(1)

            setTimeout(() => {
                expect(countdown.state.count).toBe(9)
                done()
            }, 1001)
        })

        it('should set countdown time and start countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<CountDown />)
            countdown.handleSetCountdownTime(1)

            setTimeout(() => {
                expect(countdown.state.count).toBe(0)
                done()
            }, 3000)
        })
    })
})