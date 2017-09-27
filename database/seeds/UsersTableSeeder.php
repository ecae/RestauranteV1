<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $user1 = [
           'name' => 'Erick Cruz Estrada',
           'email' => 'erick@hotmail.com',
           'password' => Hash::make('alexander')
       ];
       \App\User::create($user1);
    }
}
