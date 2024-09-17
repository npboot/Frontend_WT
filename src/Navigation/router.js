import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Webpages/Login/Login.jsx";
import HomepageTrainer from "../Webpages/HomepageTrainer/HomepageTrainer.jsx";
import HomepageTrainee from "../Webpages/HomepageTrainee/HomepageTrainee.jsx";
import BookInfo from "../Webpages/BookInfo/BookInfo.jsx";
import Catalog from "../Webpages/Catalog/Catalog.jsx";
import EditBook from "../Webpages/EditBook/EditBook.jsx";
import ReserveBook from "../Webpages/ReserveBook/ReserveBook.jsx";
import AddBook from "../Webpages/AddBook/AddBook.jsx";
import BorrowInfo from "../Webpages/BorrowInfo/BorrowInfo.jsx";

//This Router file will contain references to all webpages and accompanying routes within the project
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Trainer" element={<HomepageTrainer />} />
        <Route path="/Trainee" element={<HomepageTrainee />} />
        <Route path="/Info" element={<BookInfo />} />
        <Route path="/Catalogus" element={<Catalog />} />
        <Route path="/BoekAanpassen" element={<EditBook />} />
        <Route path="/Reservering" element={<ReserveBook />} />
        <Route path="/BoekToevoegen" element={<AddBook/>}/>
        <Route path="/LeningInformatie" element={<BorrowInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}
