import React, { useState } from "react";
import { connect } from "react-redux";
import { listeyeEkle,isaretle,temizle } from "./actions";
import "./styles.css";

const App = (props)=> {
  const[text,setText]=useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input onChange={e=>setText(e.target.value)} value={text} placeholder="listeye ekle" />
        <button onClick={()=>{
            props.listeyeEkle(text)
            setText("");
            }}
            >Ekle</button>
      </div>
      <div className="liste">
        {props.liste.map(item => (
          <div style={{cursor:"pointer"}} onClick={()=> props.isaretle(item.id)} key={item.id} className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button onClick={()=>props.temizle()} className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    liste:state.liste
  }
}

export default connect(mapStateToProps, {listeyeEkle,isaretle,temizle})(App);