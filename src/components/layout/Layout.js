import React, { useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import Card from "../card/Card";
import { checkPlayerWon, getData } from "../../utils/utils";
import StatusModal from "../statusModal/StatusModal";
import Footer from "../footer/Footer";
import "./layout.scss";

const Layout = () => {
  let data = getData();

  const refresh = () => {
    setCardData(data);
    setStatus("");
    setWinIndex([]);
    setShowModal(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState(data);
  const [status, setStatus] = useState("");
  const [isMute, setIsMute] = useState(false);
  const [winIndex, setWinIndex] = useState([]);

  const onCardClick = (key) => {
    if (key !== 13) {
      cardData[key].flag = !cardData[key].flag;
      setCardData(cloneDeep(cardData));
      const { didWin, winArrIndex } = checkPlayerWon(cardData);
      debugger;
      if (didWin) {
        setShowModal(true);
        setStatus("applause");
      }
      if (winArrIndex && winArrIndex.length > 0) {
        setWinIndex(cloneDeep(winArrIndex));
      } else {
        setWinIndex([]);
      }
      // else if (cardData[key].flag) {
      //   setStatus("win");
      // } else {
      //   setStatus("lose");
      // }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStatus("");
  };

  return (
    <>
      <div className="col-lg-7 col-md-11 col-sm-12 layout">
        {Object.values(cardData).map((item) => {
          return (
            <div key={item.key} className="card-parent-div">
              <Card
                winIndex={winIndex}
                onCardClick={onCardClick}
                uniqueId={item.key}
                caption={item.caption}
                flag={item.flag}
                status={status}
              />
            </div>
          );
        })}
        <StatusModal
          status={status}
          handleClose={handleCloseModal}
          showModal={showModal}
          isMute={isMute}
        />
      </div>
      <Footer
        refresh={refresh}
        isMute={isMute}
        setVol={() => {
          setIsMute(!isMute);
        }}
      />
    </>
  );
};

export default Layout;
