import React from 'react'
import './Tariffs.css'
import Tariff from '../Tariff/Tariff';

const tariffs = [
    {
        id: 1,
        title: 'Везде онлайн',
        price: 500,
        period: 31,
        isHit: true,
        traffic: 40960,
        convertTraffic: true,
        minutes: 500,
        sms: 50,
        configurable: true,
        unlimSites: [
            'vk', 'facebook', 'odnoklassniki', 'whatsapp', 'viber', 'tam-tam',
            'instagram'
        ],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id: 2,
        title: 'Мой онлайн',
        price: 400,
        period: 31,
        isHit: false,
        traffic: 15360,
        convertTraffic: true,
        minutes: 500,
        sms: false,
        configurable: true,
        unlimSites: [
            'vk', 'facebook', 'odnoklassniki', 'whatsapp', 'viber', 'tam-tam',
            'instagram'
        ],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id:3,
        title: 'Мой онлайн +',
        price: 700,
        period: 31,
        isHit: false,
        traffic: 30720,
        convertTraffic: true,
        minutes: 800,
        sms: false,
        configurable: true,
        unlimSites: [
            'vk', 'facebook', 'odnoklassniki', 'whatsapp', 'viber', 'tam-tam',
            'instagram'
        ],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id:4, title: 'Мой разговор +',
        price: 200,
        period: 31,
        isHit: false,
        traffic: 2048,
        convertTraffic: true,
        minutes: 200,
        sms: false,
        configurable: true,
        unlimSites: [],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id:5,
        title: 'Мой Tele2',
        price: 7,
        period: 1,
        isHit: false,
        traffic: 5120,
        convertTraffic: true,
        minutes: false,
        sms: false,
        configurable: true,
        unlimSites: [],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id: 6,
        title: 'Безлимит',
        price: 650,
        period: 31,
        isHit: false,
        traffic: false,
        convertTraffic: true,
        minutes: 500,
        sms: 50, 
        configurable: false,
        unlimCalls: true,
        unlimSites: [],
        unlimTraffic: true,
    },
    {
        id: 7,
        title: 'Премиум',
        price: 1500,
        period: 31,
        isHit: false,
        traffic: 51200,
        convertTraffic: true,
        minutes: 2000,
        sms: 500,
        configurable: false,
        unlimSites: [],
        unlimCalls: true,
        unlimTraffic: false,
    },
    {
        id:8,
        title: 'Классический',
        price: 0,
        period: false,
        isHit: false,
        traffic: false,
        convertTraffic: false,
        minutes: false,
        sms: false,
        configurable: true,
        unlimSites: [],
        unlimTraffic: false,
    },
    {
        id:9,
        title: 'Интернет для устройств',
        price: 0,
        period: false,
        isHit: false,
        traffic: false,
        convertTraffic: false,
        minutes: false,
        sms: false,
        configurable: false,
        unlimSites: [],
        unlimTraffic: false,
    },
    {
        id: 10,
        title: 'Интернет для вещей',
        price: 100,
        period: 31,
        isHit: false,
        traffic: 300,
        convertTraffic: false,
        minutes: 500,
        sms: 100,
        configurable: false,
        unlimSites: [],
        unlimTraffic: false,
    },
];
export default function Tariffs() {
    return (
        <div className="tariffs">
            <h1 className="tariffs__title">ТАРИФЫ</h1>
            {tariffs.map(tariff => <Tariff key={tariff.id} tariff={tariff} />)}
        </div>
    )
}
