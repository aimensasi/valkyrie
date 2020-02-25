<?php

namespace App\Services\Shared;

use App\Models\User;
use App\Models\VerificationToken;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\TransformerService;


class IdentityVerificationServices{

	private const TYPE_EMAIL = 'EMAIL_VERIFICATION';
	private const TYPE_PASSWORD = 'PASSWORD_RESET';


	public function generateEmailCodeToken(User $user){
		$this->revokeEmailTokens($user);

		return VerificationToken::create([
			'user_id' => $user->id,
			'token' => $this->generateUniqueCode(self::TYPE_EMAIL),
			'expire_in' => Carbon::now()->addHours(24),
			'type' => self::TYPE_EMAIL,
		]);
	}

	public function generateEmailToken(User $user){
		$this->revokeEmailTokens($user);

		return VerificationToken::create([
			'user_id' => $user->id,
			'token' => $this->generateUniqueToken(self::TYPE_EMAIL),
			'expire_in' => Carbon::now()->addHours(24),
			'type' => self::TYPE_EMAIL,
		]);
	}

	public function generatePasswordToken(User $user){
		$this->revokePasswordTokens($user);

		return VerificationToken::create([
			'user_id' => $user->id,
			'token' => $this->generateUniqueToken(self::TYPE_PASSWORD),
			'expire_in' => Carbon::now()->addHours(24),
			'type' => self::TYPE_PASSWORD,
		]);
	}

	public function isValidEmailToken($token){
		$token = VerificationToken::where('token', $token)
																->where('type', self::TYPE_EMAIL)
																->where('validated_at', null)
																->first();




		if ($token && $token->expire_in > Carbon::now()) {
			return $token;
		}

		return null;
	}

	public function isValidPasswordToken($token){
		$token = VerificationToken::where('token', $token)
																->where('type', self::TYPE_PASSWORD)
																->where('validated_at', null)
																->first();

		if ($token && $token->expire_in > Carbon::now()) {
			return $token;
		}

		return null;
	}

	public function revokeAllTokens(User $user){
		$tokens = VerificationToken::where('user_id', $user->id)
																->where('validated_at', null)->get();

		if (!empty($tokens)) {
			foreach ($tokens as $token) {
				$token->validated_at = Carbon::now();
				$token->save();
			}
		}
	}

	public function revokeEmailTokens(User $user){
		$tokens = VerificationToken::where('user_id', $user->id)
																->where('type', self::TYPE_EMAIL)
																->where('validated_at', null)->get();

		if (!empty($tokens)) {
			foreach ($tokens as $token) {
				$token->validated_at = Carbon::now();
				$token->save();
			}
		}
	}

	public function revokePasswordTokens(User $user){
		$tokens = VerificationToken::where('user_id', $user->id)
																->where('type', self::TYPE_PASSWORD)
																->where('validated_at', null)->get();

		if (!empty($tokens)) {
			foreach ($tokens as $token) {
				$token->validated_at = Carbon::now();
				$token->save();
			}
		}
	}

	private function generateUniqueToken($type){
		return md5($type . ' verification' . time() . 'token');
	}

	private function generateUniqueCode($type){
		$code = '';
		$chars = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9';
		$charArray = explode(',', $chars);
		shuffle($charArray);

		$code = $charArray[array_rand($charArray, 1)] .
		$charArray[array_rand($charArray, 1)] .
		$charArray[array_rand($charArray, 1)] .
		$charArray[array_rand($charArray, 1)] .
		$charArray[array_rand($charArray, 1)] .
		$charArray[array_rand($charArray, 1)];

		return $code;
	}

	public function revokeToken(VerificationToken $token){
		$token->validated_at = Carbon::now();
		$token->save();
	}
}
