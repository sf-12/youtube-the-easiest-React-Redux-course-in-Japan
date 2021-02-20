/**
 * 複雑な処理を記述する
 */

import {signInAction} from "./actions";
import {push} from "connected-react-router";

export const signIn = () => {
  return async (dispatch,getState) => {
    // 現在のReduxのStoreの情報を取得
    const state = getState();
    // 現在のサインイン状態を取得
    const isSignedIn = state.users.isSignedIn;

    if(!isSignedIn) {
      // ログイン処理の代替として
      // githubのユーザー情報を取得するapiを叩いてみる
      const url = 'https://api.github.com/users/sf-12';

      // awaitがあることでapiの処理終了まで待機することができる
      const response = await fetch(url)
                              .then(res => res.json())
                              .catch(() => null);
      const username = response.login;

      // githubから取得したユーザー名でサインインする
      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        username: username
      }))
      // ホーム画面に遷移する
      // connected-react-routerによってルーティングをReduxで管理している
      dispatch(push('/'))
    }
  }
}
