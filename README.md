# yarn workspace monorepo-boilerplate

yarn workspace 를 활용한 monorepo boilerplate

```
yarn set version berry
yarn -v // yarn 3.xx
yarn
```

```bash
├── services # 서비스 app 위치
│   └── next-app
├── shared # 공유 코드 위치
│   ├── component
│   └── utils
└── package.json
└── tsconfig.base.json
└── tsconfig.spec.json
└── .yarnrc.yml
```

## next-app 실행

```
yarn next dev

```

## common code 사용법

```ts
import { hello } from '@common/utils';
import { Button } from '@common/component';
```

## TODO

- storybook
- testcode
