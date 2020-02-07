import React from 'react';
import './Tariff.css';

export default function Tariff({ tariff }) {
    let sites;
    if (tariff.unlimSites && tariff.unlimSites.length > 0) {
        sites = tariff.unlimSites.map((site) => <span key={site} className="tariff__unlim-site">{site}</span>);
    } else {
        sites = false;
    }
    
    return (
        <div className="tariff">
            <div className={tariff.isHit  ? "tariff__title tariff__title--hit" : "tariff__title"}>
                <div className="tariff__title-title">{ tariff.title }</div>
                <div className="tariff__title-details">
                    { tariff.period && 
                        <>
                            <span className="tariff__title-price">{ tariff.price }</span>
                            <div className="tariff__title-period">
                                <span className="tariff__title-period-symbol">₽</span>
                                <span className="tariff__title-period-period">
                                    / { tariff.period === 31 && 'месяц' } { tariff.period === 1 && 'день' }
                                </span>
                            </div>
                        </>
                    } {
                        !tariff.period && <span className="tariff__title-details-free">без абоненской платы</span>
                    }
                </div>
                
            </div>
            <div className="tariff__traffic">
                { tariff.unlimTraffic && <span className="tariff__traffic-size">БЕЗЛИМИТНЫЙ ИНТЕРНЕТ</span>}
                { tariff.traffic && tariff.convertTraffic && <span className="tariff__traffic-size">{ tariff.traffic / 1024 } ГБ</span> }
                { tariff.traffic && !tariff.convertTraffic && <span className="tariff__traffic-size">{ tariff.traffic } МБ</span> }
                { sites &&  <><span>так же бесплатен для <br /> {sites} </span></> }
            </div>
            <div className="tariff__minutes">
                { tariff.minutes && <span className="tariff__minutes-minutes">{ tariff.minutes } мин.</span>}
                { tariff.unlimCalls && <span className="tariff__minutes-inlim">+ безлимит на Tele2 России</span> }
            </div>
            <div className="tariff__sms">
                { tariff.sms && <span className="tariff__sms-sms">{ tariff.sms } смс</span> }
            </div>
            <div className="tariff__buy">
                <a className="tariff__buy-link">Купить SIM</a>
                { tariff.configurable && <a className="tariff__buy-config">Настроить тариф</a> }
            </div>
        </div>
    )
}
