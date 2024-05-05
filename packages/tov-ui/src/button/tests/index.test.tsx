import { mount } from '@vue/test-utils'
import { TovButton } from 'tov-ui'

describe('button', () => {
  it('should work', () => {
    const wrapper = mount(<TovButton type="primary">test</TovButton>)
    const btnEl = wrapper.find('button')
    const hasPrimary = btnEl.element.classList.contains('tov-button--primary')
    // console.log(hasPrimary)
    expect(hasPrimary).toBe(true)
    wrapper.unmount()
  })

  it('size', () => {
    const wrapper = mount(<TovButton size="small">test</TovButton>)
    const btnEl = wrapper.find('button')
    expect(btnEl.element.classList.contains('tov-button-size--small')).toBe(true)
    wrapper.unmount()
  })

  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wrapper = mount(<TovButton onClick={handleClick}>test</TovButton>)
    const btnEl = wrapper.find('button')
    btnEl.trigger('click')
    expect(clickState).toBe(true)
    wrapper.unmount()
  })
})
