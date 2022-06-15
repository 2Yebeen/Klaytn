# Klaytn

[참고](https://docs.klaytn.foundation/), 
[강의 - 카카오의 블록체인 Klaytn](https://www.inflearn.com/course/%ED%81%B4%EB%A0%88%EC%9D%B4%ED%8A%BC/dashboard)

## 1. 기존 블록체인 플랫폼의 약점

### 1.1. Scalability 
- Scalability = TPS + Block Interval
- TPS(Transaction Per Second) : 초당 몇 개의 거래 처리 할 수 있는지
    - Visa : TPS 1700
    - 비트코인 : TPS 7
    - 이더리움 TPS 15~ 20
- Block Interval : 블록 생성 간격을 말한다.
    - 비트코인 10 분
    - 이더리움 15초 - 20초
        - ETH : 20tps + 15s block interval = > 20 * 15 = 300 transactions

### 1.2 기존의 블록체인이 느린 이유
- 많은 양의 트랜잭션 처리하기 부족
- 네트워크 자체 속도 느림

### 1.3 Finality
- TX가 변경 불가라는 합리적인 보장받기까지 기다려야 되는 시간을 말한다.
- 블록이 Final하다는 것은 ? 블록에 담긴 TX(거래)가 바뀔 수 없다는 것을 보증하는 것.
- 비트코인과 이더리움은 최종성이 부족하고 활률론적 최종성만 제공한다.
    - 비트코인 : 60분 (6번의 검증)
    - 이더리움 : 6분 (25번의 검증)

### 1.4 Fork
블록체인 P2P네트워크에서 모든 참여자들이 독립적으로 체굴을 할 수 있기 때문에 블록들의 연결이 두 개 이상의 분기로 갈라지는 현상을 말한다.
- 작업증명(PoW)방식 : LongestChain Rule
