<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function getLogin()
    {
        return Inertia::render('Admin/Login');
    }

    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:admin,email',
            'password' => 'required'
        ]);

        if (auth()->guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->intended('/admin');
        } else {
            return redirect()->back()->with('error', 'Email or password is incorrect');
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.Admin::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $admin = Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($admin));

        Auth::login($admin);

        return redirect('/admin');
    }

    public function register()
    {
        return Inertia::render('Admin/Register');
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
