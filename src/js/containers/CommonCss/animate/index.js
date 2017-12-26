import React, {Component} from 'react'
import {Link} from 'react-router'
import {Layout, Button, Row, Col, Alert, Modal } from 'antd';

import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai-sublime.css'

import styles from './index.scss'
import classnames from 'classnames'

export default class AnimateCss extends Component {
    constructor(){
        super();
        this.state= {
            hover: 'out',
            visible: false,
            code: '',
            copied: false
        }
        this.CodeObj = {
            bounce : ` 
            .bounce:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: bounce;
            }
            @keyframes bounce {
                0%,
                100%,
                20%,
                50%,
                80% {
                    transform: translateY(0)
                }
                40% {
                    transform: translateY(-30px)
                }
                60% {
                    transform: translateY(-15px)
                }
            }`,
            flash : `
            .flash:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: flash
            }
            @keyframes flash {
                0%,
                100%,
                50% {
                    opacity: 1
                }
                25%,
                75% {
                    opacity: 0
                }
            }`,
            pulse : `
            .pulse:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: pulse
            }
            @keyframes pulse {
                0% {
                    transform: scale(1)
                }
                50% {
                    transform: scale(1.1)
                }
                100% {
                    transform: scale(1)
                }
            }`,
            rubberBand : `
            .rubberBand:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: rubberBand
            }
            @keyframes rubberBand {
                0% {
                    transform: scale(1)
                }
                30% {
                    transform: scaleX(1.25) scaleY(0.75)
                }
                40% {
                    transform: scaleX(0.75) scaleY(1.25)
                }
                60% {
                    transform: scaleX(1.15) scaleY(0.85)
                }
                100% {
                    transform: scale(1)
                }
            }`,
            shake : `
            .shake:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: shake
            }
            @keyframes shake {
                0%,
                100% {
                    transform: translateX(0)
                }
                10%,
                30%,
                50%,
                70%,
                90% {
                    transform: translateX(-10px)
                }
                20%,
                40%,
                60%,
                80% {
                    transform: translateX(10px)
                }
            }`,
            swing : `
            .swing:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                transform-origin: top center;
                animation-name: swing
            }
            @keyframes swing {
                20% {
                    transform: rotate(15deg)
                }
                40% {
                    transform: rotate(-10deg)
                }
                60% {
                    transform: rotate(5deg)
                }
                80% {
                    transform: rotate(-5deg)
                }
                100% {
                    transform: rotate(0deg)
                }
            }`,
            tada : `
            .tada:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: tada
            }
            @keyframes tada {
                0% {
                    transform: scale(1)
                }
                10%,
                20% {
                    transform: scale(0.9) rotate(-3deg)
                }
                30%,
                50%,
                70%,
                90% {
                    transform: scale(1.1) rotate(3deg)
                }
                40%,
                60%,
                80% {
                    transform: scale(1.1) rotate(-3deg)
                }
                100% {
                    transform: scale(1) rotate(0)
                }
            }`,
            wobble : `
            .wobble:hover {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: wobble
            }
            @keyframes wobble {
                0% {
                    transform: translateX(0%)
                }
                15% {
                    transform: translateX(-25%) rotate(-5deg)
                }
                30% {
                    transform: translateX(20%) rotate(3deg)
                }
                45% {
                    transform: translateX(-15%) rotate(-3deg)
                }
                60% {
                    transform: translateX(10%) rotate(2deg)
                }
                75% {
                    transform: translateX(-5%) rotate(-1deg)
                }
                100% {
                    transform: translateX(0%)
                }
            }`,
            bounceIn : `
            .hoverBox:hover .bounceIn  {
                animation-duration: 2s;
                animation-fill-mode: both;
                animation-name: bounceIn
            }
            @keyframes bounceIn {
                0% {
                    opacity: 0;
                    transform: scale(.6)
                }
                50% {
                    opacity: 1;
                    transform: scale(1.05)
                }
                70% {
                    transform: scale(.9)
                }
                100% {
                    opacity: 1;
                    transform: scale(1)
                }
            }`,
            bounceInDown : `
            .bounceInDown  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: bounceInDown
            }
            @keyframes bounceInDown {
                0% {
                    opacity: 0;
                    transform: translateY(-2000px)
                }
                60% {
                    opacity: 1;
                    transform: translateY(30px)
                }
                80% {
                    transform: translateY(-10px)
                }
                100% {
                    transform: translateY(0)
                }
            }`,
            bounceInLeft : `
            .hoverBox:hover .bounceInLeft  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: bounceInLeft
            }
            @keyframes bounceInLeft {
                0% {
                    opacity: 0;
                    transform: translateX(-2000px)
                }
                60% {
                    opacity: 1;
                    transform: translateX(30px)
                }
                80% {
                    transform: translateX(-10px)
                }
                100% {
                    transform: translateX(0)
                }
            }`,
            bounceOut : `
            .hoverBox:hover .bounceOut  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: bounceOut
            }
            @keyframes bounceOut {
                0% {
                    transform: scale(1)
                }
                25% {
                    transform: scale(.95)
                }
                50% {
                    opacity: 1;
                    transform: scale(1.1)
                }
                100% {
                    opacity: 0;
                    transform: scale(.3)
                }
            }`,
            fadeIn : `
            .fadeIn:hover  {
                animation-duration: 1.4s;
                animation-fill-mode: both;
                animation-name: fadeIn
            }
            @keyframes fadeIn {
                0% {
                    opacity: 0
                }
                100% {
                    opacity: 1
                }
            }`,
            fadeInDown : `
            .fadeInDown:hover  {
                animation-duration: 1.4s;
                animation-fill-mode: both;
                animation-name: fadeInDown
            }
            @keyframes fadeInDown {
                0% {
                    opacity: 0;
                    transform: translateY(-20px)
                }
                100% {
                    opacity: 1;
                    transform: translateY(0)
                }
            }`,
            fadeOut : `
            .fadeOut:hover  {
                animation-duration: 1.4s;
                animation-fill-mode: both;
                animation-name: fadeOut
            }
            @keyframes fadeOut {
                0% {
                    opacity: 1
                }
                100% {
                    opacity: 0
                }
            }`,
            fadeOutDown : `
            .fadeOutDown:hover  {
                animation-duration: 1.4s;
                animation-fill-mode: both;
                animation-name: fadeOutDown
            }
            @keyframes fadeOutDown {
                0% {
                    opacity: 1;
                    transform: translateY(0)
                }
                100% {
                    opacity: 0;
                    transform: translateY(20px)
                }
            }`,
            flip : `
            .flip:hover  {
                animation-duration: 0.5s;
                animation-fill-mode: both;
                backface-visibility: visible;
                animation-name: flip
            }
            @keyframes flip {
                0% {
                    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                    animation-timing-function: ease-out
                }
                40% {
                    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                    animation-timing-function: ease-out
                }
                50% {
                    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                    animation-timing-function: ease-in
                }
                80% {
                    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
                    animation-timing-function: ease-in
                }
                100% {
                    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                    animation-timing-function: ease-in
                }
            }`,
            flipInX : `
            .hoverBox:hover .flipInX  {
                animation-duration: 1s;
                animation-fill-mode: both;
                backface-visibility: visible!important;
                animation-name: flipInX
            }
            @keyframes flipInX {
                0% {
                    transform: perspective(400px) rotateX(90deg);
                    opacity: 0
                }
                40% {
                    transform: perspective(400px) rotateX(-10deg)
                }
                70% {
                    transform: perspective(400px) rotateX(10deg)
                }
                100% {
                    transform: perspective(400px) rotateX(0deg);
                    opacity: 1
                }
            }`,
            flipInY : `
            .hoverBox:hover .flipInY  {
                animation-duration: 1s;
                animation-fill-mode: both;
                backface-visibility: visible!important;
                animation-name: flipInY;
            }
            @keyframes flipInY {
                0% {
                    transform: perspective(400px) rotateY(90deg);
                    opacity: 0
                }
                40% {
                    transform: perspective(400px) rotateY(-10deg)
                }
                70% {
                    transform: perspective(400px) rotateY(10deg)
                }
                100% {
                    transform: perspective(400px) rotateY(0deg);
                    opacity: 1
                }
            }`,
            flipOutX : `
            .hoverBox:hover .flipOutX  {
                animation-duration: 1s;
                animation-fill-mode: both;
                backface-visibility: visible!important;
                animation-name: flipOutX;
            }
            @keyframes flipOutX {
                0% {
                    transform: perspective(400px) rotateX(0deg);
                    opacity: 1
                }
                100% {
                    transform: perspective(400px) rotateX(90deg);
                    opacity: 0
                }
            }`,
            flipOutY : `
            .hoverBox:hover .flipOutY  {
                animation-duration: 1s;
                animation-fill-mode: both;
                backface-visibility: visible!important;
                animation-name: flipOutY;
            }
            @keyframes flipOutY {
                0% {
                    transform: perspective(400px) rotateY(0deg);
                    opacity: 1
                }
                100% {
                    transform: perspective(400px) rotateY(90deg);
                    opacity: 0
                }
            }`,
            lightSpeedIn : `
            .hoverBox:hover .lightSpeedIn  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: lightSpeedIn;
                animation-timing-function: ease-out;
            }
            @keyframes lightSpeedIn {
                0% {
                    transform: translateX(100%) skewX(-30deg);
                    opacity: 0
                }
                60% {
                    transform: translateX(-20%) skewX(30deg);
                    opacity: 1
                }
                80% {
                    transform: translateX(0%) skewX(-15deg);
                    opacity: 1
                }
                100% {
                    transform: translateX(0%) skewX(0deg);
                    opacity: 1
                }
            }`,
            lightSpeedOut : `
            .hoverBox:hover .lightSpeedOut  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: lightSpeedOut;
                animation-timing-function: ease-out;
            }
            @keyframes lightSpeedOut {
                0% {
                    transform: translateX(0%) skewX(0deg);
                    opacity: 1
                }
                100% {
                    transform: translateX(100%) skewX(-30deg);
                    opacity: 0
                }
            }`,
            rotateIn : `
            .hoverBox:hover .rotateIn  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: rotateIn;
            }
            @keyframes rotateIn {
                0% {
                    transform-origin: center center;
                    -webkit-transform: rotate(-200deg);
                    opacity: 0
                }
                100% {
                    transform-origin: center center;
                    transform: rotate(0);
                    opacity: 1
                }
            }`,
            rotateInDownLeft : `
            .hoverBox:hover .rotateInDownLeft  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: rotateInDownLeft;
            }
            @keyframes rotateInDownLeft {
                0% {
                    transform-origin: left bottom;
                    transform: rotate(-90deg);
                    opacity: 0
                }
                100% {
                    transform-origin: left bottom;
                    transform: rotate(0);
                    opacity: 1;
                }
            }`,
            slideInDown : `
            .hoverBox:hover .slideInDown  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: slideInDown;
            }
            @keyframes slideInDown {
                0% {
                    opacity: 0;
                    transform: translateY(-2000px);
                }
                100% {
                    transform: translateY(0);
                }
            }`,
            hinge : `
            .hoverBox:hover .hinge  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: hinge;
            }
            @keyframes hinge {
                0% {
                    transform: rotate(0);
                    transform-origin: top left;
                    animation-timing-function: ease-in-out
                }
                20%,
                60% {
                    transform: rotate(80deg);
                    transform-origin: top left;
                    animation-timing-function: ease-in-out
                }
                40% {
                    transform: rotate(60deg);
                    transform-origin: top left;
                    animation-timing-function: ease-in-out
                }
                80% {
                    transform: rotate(60deg) translateY(0);
                    transform-origin: top left;
                    opacity: 1
                }
                100% {
                    transform: translateY(700px);
                    opacity: 0
                }
            }`,
            rollIn : `
            .hoverBox:hover .rollIn  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: rollIn;
            }
            @keyframes rollIn {
                0% {
                    opacity: 0;
                    transform: translateX(-100%) rotate(-120deg)
                }
                100% {
                    opacity: 1;
                    transform: translateX(0px) rotate(0deg)
                }
            }`,
            zoomInDown : `
            .hoverBox:hover .zoomInDown  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: zoomInDown;
            }
            @keyframes zoomInDown {
                0% {
                    opacity: 0;
                    transform: scale(.1) translateY(-2000px);
                    animation-timing-function: ease-in-out
                }
                60% {
                    opacity: 1;
                    transform: scale(.475) translateY(60px);
                    animation-timing-function: ease-out
                }
            }`,
            zoomOutUp : `
            .hoverBox:hover .zoomOutUp  {
                animation-duration: 1s;
                animation-fill-mode: both;
                animation-name: zoomOutUp;
            }
            @keyframes zoomOutUp {
                40% {
                    opacity: 1;
                    transform: scale(.475) translateY(60px);
                    animation-timing-function: linear
                }
                100% {
                    opacity: 0;
                    transform: scale(.1) translateY(-2000px);
                    transform-origin: center top
                }
            }`
        }
    }
    setcode = (key) =>{
        console.log(key);
        this.setState({
            visible: true,
            code: this.CodeObj[key]
          });
        console.log(this.state.code);
        console.log(this.CodeObj[key]);
        // this.showModal()
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
          copied: true
        });
    }

    render() {
       

        return (
            <div className={styles.seabord}>
                <Alert message="鼠标悬停显示效果，点击显示代码" type="info" showIcon />
                <Row>
                    <Col span={4} className={styles.itemBox} >
                        <div className={styles.bounce} onClick={this.setcode.bind(this,'bounce')}>bounce弹跳</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.flash} onClick={this.setcode.bind(this,'flash')}>flash闪烁</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.pulse} onClick={this.setcode.bind(this,'pulse')}>pulse放大</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.rubberBand} onClick={this.setcode.bind(this,'rubberBand')}>rubberBand拉扯</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                    <div className={styles.shake} onClick={this.setcode.bind(this,'shake')}>shake晃动</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.swing} onClick={this.setcode.bind(this,'swing')}>swing摇摆</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.tada} onClick={this.setcode.bind(this,'tada')}>tada波动</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                    <div className={styles.wobble} onClick={this.setcode.bind(this,'wobble')}>wobble摇动</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.bounceIn} onClick={this.setcode.bind(this,'bounceIn')}>bounceIn放大进入</div>
                    </Col>
                    <Col span={4} className={styles.itemBox} onMouseOver={()=>{this.setState({hover:'on'})}} onMouseOut={()=>{this.setState({hover:'out'})}}>
                        <div className={this.state.hover=='on' ? styles.bounceInDown: ''} onClick={this.setcode.bind(this,'bounceInDown')}>bounceInDown下落进入</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.bounceInLeft} onClick={this.setcode.bind(this,'bounceInLeft')}>bounceInLeft左侧进入</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.bounceOut} onClick={this.setcode.bind(this,'bounceOut')}>bounceOut缩小消失</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.fadeIn} onClick={this.setcode.bind(this,'fadeIn')}>fadeIn淡入</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.fadeInDown} onClick={this.setcode.bind(this,'fadeInDown')}>fadeInDown缓落</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.fadeOut} onClick={this.setcode.bind(this,'fadeOut')}>fadeOut</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.fadeOutDown} onClick={this.setcode.bind(this,'fadeOutDown')}>fadeOutDown</div>
                    </Col>
                    <Col span={4} className={styles.itemBox}>
                        <div className={styles.flip} onClick={this.setcode.bind(this,'flip')}>flip旋转3d</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.flipInX} onClick={this.setcode.bind(this,'flipInX')}>flipInX旋转纵</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.flipInY} onClick={this.setcode.bind(this,'flipInY')}>flipInY旋转横</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.flipOutX} onClick={this.setcode.bind(this,'flipOutX')}>flipOutX旋转消失</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.flipOutY} onClick={this.setcode.bind(this,'flipOutY')}>flipOutY旋转消失</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.lightSpeedIn} onClick={this.setcode.bind(this,'lightSpeedIn')}>lightSpeedIn变形入</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.lightSpeedOut} onClick={this.setcode.bind(this,'lightSpeedOut')}>lightSpeedOut变形出</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.rotateIn} onClick={this.setcode.bind(this,'rotateIn')}>rotateIn旋转2d</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.rotateInDownLeft} onClick={this.setcode.bind(this,'rotateInDownLeft')}>rotateInDownLeft左旋入</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.slideInDown} onClick={this.setcode.bind(this,'slideInDown')}>slideInDown降落</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.hinge} onClick={this.setcode.bind(this,'hinge')}>hinge剥落</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.rollIn} onClick={this.setcode.bind(this,'rollIn')}>rollIn旋入</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.zoomInDown} onClick={this.setcode.bind(this,'zoomInDown')}>zoomInDown由远及近</div>
                    </Col>
                    <Col span={4} className={classnames(styles.itemBox, styles.hoverBox)}>
                        <div className={styles.zoomOutUp} onClick={this.setcode.bind(this,'zoomOutUp')}>zoomOutUp由近及远</div>
                    </Col>
                </Row>
                <Modal
                    title="样式代码"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    className={styles.codeBox}
                    >
                    <Highlight>{this.state.code}</Highlight>
                </Modal>
            </div> 
        );
    }
}
