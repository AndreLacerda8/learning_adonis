import Route from '@ioc:Adonis/Core/Route'

// Route.get('/users/:id?', async ({ params }) => {
//     if(params.id)
//         return User.findBy('id', params.id)
//     else
//         return User.all()
// })

// Route.group(() => {
//     Route.get('users', 'UsersController.index')
//     Route.get('users/:id', 'UsersController.show')
//     Route.post('users', 'UsersController.store')
//     Route.put('users/:id', 'UsersController.update')
//     Route.delete('users/:id', 'UsersController.destroy')
// }).middleware('auth')

Route.group(() => {
    Route.resource('users', 'UsersController')
        .apiOnly()
        .middleware({
            index: ['auth'],
            show: ['auth'],
            update: ['auth'],
            destroy: ['auth'],
        })
})