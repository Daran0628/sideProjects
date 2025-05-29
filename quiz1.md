# 📘 자바 제네릭 문제 3선
---

## ✅ 문제 1: `Pair.of()` — 정적 팩토리 메서드

**목표**: 제네릭 클래스를 위한 `static` 팩토리 메서드 구현

```java
public class Pair<A, B> {
    private A first;
    private B second;

    public Pair(A first, B second) {
        this.first = first;
        this.second = second;
    }

    public static <U, V> Pair<U, V> of(U u, V v) {
        return new Pair<>(u, v);
    }

    @Override
    public String toString() {
        return "Pair{" + "first=" + first + ", second=" + second + '}';
    }
} 
```
---
**사용 예시**
```java
Pair<String, Integer> p = Pair.of("kosmo154", 2025);
System.out.println(p); // 출력: Pair{first=kosmo154, second=2025}
```
## ✅ 문제 2: max() — 비교 가능한 타입 중 최대값 찾기
**목표**: Comparable<T> 인터페이스를 활용해 두 값 중 더 큰 값을 반환

```java
public class MaxUtil {
    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }
}
```
***사용 예시***:

```java
System.out.println(MaxUtil.max(3, 5));           // 출력: 5
System.out.println(MaxUtil.max("자바", "싸가지없어")); // 출력: (알파벳 순)
```

## ✅ 문제 3: sumAll() — 숫자 리스트의 총합 계산
**목표**: 와일드카드를 이용해 다양한 숫자 타입을 처리하고 합계를 계산

```java
import java.util.List;

public class Q2Double {
    public static double sumAll(List<? extends Number> nums) {
        double result = 0;
        for (Number num : nums) {
            result += num.doubleValue();
        }
        return result;
    }
}
```
**사용 예시**:

```java
import java.util.Arrays;
import java.util.List;

List<Integer> nums = Arrays.asList(1, 2, 3, 4);
System.out.println(Q2Double.sumAll(nums)); // 출력: 10.0
```

## 📦 요약

| 문제 | 주요 개념 | 핵심 키워드 |
|------|----------|--------------|
| Pair.of() | 정적 제네릭 메서드 | `<U, V>`, `static`, 타입 추론 |
| max() | 제네릭 타입 제한 | `<T extends Comparable<T>>`, `compareTo()` |
| sumAll() | 와일드카드 | `List<? extends Number>`, `doubleValue()` |


