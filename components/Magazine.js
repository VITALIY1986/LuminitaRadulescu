import Image from "next/image";
import Animate from "../components/Animate";
import { Block, Row, Col } from "../components/Grid";
import { Twitter, Dribbble, Instagram, Tumbler } from "../components/Icon";

import styles from "../styles/Magazine.module.scss";

const Magazine = (props) => (
    <div className={`${props.className} ${styles.magazine}`}>
        <div className={styles.row}>{props.children}</div>
    </div>
);

Magazine.Cover = (props) => {
    const style = {
        backgroundImage: `url(${props.image})`,
    };

    return (
        <div className={`${styles.col} ${styles.magazine__cover}  ${props.className}`} style={props.style}>
            <div className={styles.magazine__loading}>
                <span className="afc-spinner afc-spinner--primary"></span>
            </div>
            <Animate name="fadeIn" delay=".1ms" duration="3s">
                <div className={styles.cover} style={style}>
                    {props.children}
                </div>
            </Animate>
        </div>
    );
};

Magazine.Content = (props) => (
    <div className={`${styles.col} ${props.className}`} style={props.style}>
        <div className={styles.content}>{props.children}</div>
    </div>
);

Magazine.Footer = (props) => {
    const color = props.color || "#fff";

    return (
        <div className={`${styles.magazine__footer} ${props.className}`} style={props.style}>
            {props.children || (
                <Block className="px-8 py-1">
                    <Animate name="fadeIn" delay="2s">
                        <Row className="row">
                            <Col className="col-12 col-sm-6">
                                <p className="text-sm text-center md:text-left invisible md:visible" style={{ color }}>
                                    © 2023 - Toate drepturile rezervate.
                                </p>
                            </Col>
                            <Col className="col-12 col-sm-6">
                                <ul className="flex items-center justify-center sm:justify-end social-icons">
                                   
                                    <li className="ml-3">
                                        <a href="/" className="hover:opacity-60">
                                            <Instagram fill={color} width={35} height={35} />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Animate>
                </Block>
            )}
        </div>
    );
};

export default Magazine;
