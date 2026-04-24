#define trigPin 9
#define echoPin 10
#define buzzer 8

long duracao;
int distancia;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzer, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Envia pulso
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Lê o retorno
  duracao = pulseIn(echoPin, HIGH);
  distancia = duracao * 0.034 / 2;

  Serial.print("Distancia: ");
  Serial.println(distancia);

  // Se algo estiver perto, apita
  if (distancia < 20) {
    digitalWrite(buzzer, HIGH);
  } else {
    digitalWrite(buzzer, LOW);
  }

  delay(200);
}
