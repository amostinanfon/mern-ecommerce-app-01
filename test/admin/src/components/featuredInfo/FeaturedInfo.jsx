import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {

  const [ income , setIcome ] = useState([]);
  const [ perc , setPerc ] = useState(0);

  useEffect(() => {
      const getIcome = async () => {
        try{
            const res = await userRequest.get("/orders/income");    
            setIcome(res.data);
            setPerc((res.data[1].total*100) / (res.data[0].total) -100 );
        } catch{}
      }

      getIcome();
  }, [])

  //testing percentage code

  console.log(income);
  console.log(perc);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparaison par rapport au dernier mois</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparaison par rapport au dernier mois</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cout</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparaison par rapport au dernier mois</span>
      </div>
    </div>
  );
}
