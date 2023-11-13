import {test, expect} from '@playwright/test'



test('API Get Request', async({request}) =>{

    const response = await request.get('https://reqres.in/api/users?page=2')

    expect(response.status()).toBe(200)

})


test('API Post Request', async({request}) =>{

    const post = await request.post('https://reqres.in/api/users',{
        data: {
            "name": "Playwright",
            "job": "Tester"
        }
    })

    expect(post.status()).toBe(201)

    const resposeText = await post.text()
    expect(resposeText).toContain('Playwright')

    //other way of writing it
    expect(await post.text()).toContain('Playwright')



})