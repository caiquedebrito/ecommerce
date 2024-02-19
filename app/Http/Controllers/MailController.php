<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\Mail as MyMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function send(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|max:255'
        ]);

        Mail::raw($request->message . "<br>Nome: " . $request->name . "<br>Email: " . $request->email, function ($message) {
            $message->from(env('MAIL_FROM_ADDRESS'), 'No Reply');
            $message->to(env('MAIL_TO_ADDRESS'), 'Ecommerce');
            $message->subject('Ecommerce');
        });

        return back()->with('success', 'Thanks for contacting us!');

    }
}