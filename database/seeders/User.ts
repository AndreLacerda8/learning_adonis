import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    const uniqueKey = 'email'
    // Write your database queries inside the run method
    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'test@mail.com',
        password: 'admin'
      },
      {
        email: 'mail@test.com',
        password: 'admin'
      },
      {
        email: 'test@test.com',
        password: 'admin'
      }
    ])
  }
}
